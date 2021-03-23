import mongoose from "mongoose";

class Service {
  constructor(model) {
    this.model = model;
  }
  async getById(id,selectedfileds) {
    try {
      let record = await this.model.findById(id).select(selectedfileds);
      if (record != '')
        return {
          err: false,
          found: true,
          statusCode: 201,
          record: record 
        };
      return {
        err: true,
        statusCode: 200,
        message: 'No record',
        record: null
      };
    } catch (err) {
      return {
        err: true,
        statusCode: 500,
        message: err,
        record: null
      };
    }
  }
  async getByField(param,selectedfileds) {
    try {
      let record = await this.model.find(param).select(selectedfileds)
      if (record != '')
        return {
          err: false,
          found: true,
          statusCode: 201,
          record: record
        };
      return {
        err: true,
        statusCode: 200,
        message: 'No record',
        record: null
      };
    } catch (err) {
      return {
        err: true,
        statusCode: 500,
        message: err,
        record: null
      };
    }
  }
  async getOne(param, selectedfileds) {
    try {
      let record = await this.model.findOne(param).select(selectedfileds);
      if (record)
        return {
          err: false,
          // deleted: true,
          statusCode: 202,
          record
        };
      return {
        err: true,
        statusCode: 404,
        message: 'No record'
      };
    } catch (err) {
      return {
        err: true,
        statusCode: 500,
        err
      };
    }
  }
  async getAllExcept(param){
    try {
      let record = await this.model.find(param); 
      if (record)
        return {
          err: false,
          // deleted: true,
          statusCode: 202,
          record
        };
      return {
        err: true,
        statusCode: 404,
        message: 'No record'
      };
    } catch (err) {
      return {
        err: true,
        statusCode: 500,
        err
      };
    }
  }
  async getAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;

    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      let record = await this.model
        .find(query)
        .skip(skip)
        .limit(limit);
      let total = await this.model.countDocuments();
      return {
        error: false,
        statusCode: 200,
        record,
        total
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        message: errors,
        record: null
      };
    }
  }

  async insert(data) {
    try {
      let record = await this.model.create(data);
      if (record)
        return {
          error: false,
          statusCode: 201,
          message: 'Successfully created',
          record
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors
      };
    }
  }

  async update(id, data) {
    
    try {
      console.log(data)
      let record = await this.model.findByIdAndUpdate(id, data, { new: true });
      console.log(record)
      if (record) {
        return {
          error: false,
          statusCode: 202,
          message: 'Successfully Updated',
          record
        }
      }
      else {
        return {
          error: true,
          statusCode: 200,
          message: "Record not updated",
          record
        }
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async updateByCondition(condition, data) {
    try {
      let record = await this.model.updateOne(condition, data, { new: true });
      if (record) {
        return {
          error: false,
          statusCode: 202,
          message: 'Successfully Updated',
          record
        }
      }
      else {
        return {
          error: true,
          statusCode: 200,
          message: "The data doesn't exist",
          record: null
        }
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  
  async delete(id) {
    try {
      let item = await this.model.findByIdAndDelete(id);
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found"
        };

      if (item.path) {
        fs.unlink(item.path, function (err) {
          if (err) {
            throw err;
          }
        });
      }

      return {
        error: false,
        statusCode: 201,
        message: 'Successfully Deleted Item',
        item
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }

  //my(mekonnen) updates here!
  async getSpecific(condition, select) {
    try {
      const record = await this.model.findOne(condition, select);
      return {
        error: false,
        statusCode: 200,
        record
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }

  async addSpecific(condition, data, select) {
    try {
      const record = await this.model.updateOne(condition, { $push: data}, select);
      return {
        error: false,
        statusCode: 200,
        record
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async updateBySet(condition, data, select) {
    try {
      const record = await this.model.updateOne(condition, { $set: data}, select);
      return {
        error: false,
        statusCode: 200,
        record
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async deleteByPull(condition, data, select) {
    try {
      const record = await this.model.updateOne(condition, { $pull: data}, select);
      return {
        error: false,
        statusCode: 200,
        record
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }

}

export default Service;

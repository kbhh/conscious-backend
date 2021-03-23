
class Controller {

  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    //get all item except specific one
    this.getAllExcept = this.getAllExcept.bind(this);
    this.getByField = this.getByField.bind(this);
    this.getById = this.getById.bind(this);
    this.getOne = this.getOne.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAllExcept(req, res) {
    //lets constract a sample query for user
    let query = {
      role: { $nin: ['REB Admin', 'Registrar Verifier', 'Content Developer', 'Content Verifier', 'School Registrar', 'School Verifier'] }
    }
    let response = await this.service.getAllExcept(query)
    console.log('non-admin user =>' + JSON.stringify(response));

    return res.status(response.statusCode).send(response);
  }
  async getAll(req, res) {
    console.log('query is =>' + JSON.stringify(req.query));

    let response = await this.service.getAll(req.query)
    return res.status(response.statusCode).send(response);
  }
  async getOne(req, res) {
    const id = req.params.id;
    let response = await this.service.getOne(req.params)
    return res.status(response.statusCode).send(response);
  }
  async getByField(req, res) {
    const id = req.params.id || req.id;
    let response = await this.service.getByField({ _id: id })
    return res.status(response.statusCode).send(response);
  }

  async getById(req, res) {
    const id = req.params.id;
    let response = await this.service.getById(id);
    return res.status(response.statusCode).send(response);
  }
  async insert(req, res) {
    let response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

  async update(req, res) {
    const id = req.params.id;
    let response = await this.service.update(id, req.body);
    return res.status(response.statusCode).send(response);
  }


  async delete(req, res) {
    const id = req.params.id;
    let response = await this.service.delete(id);
    return res.status(response.statusCode).send(response);
  }

}

export default Controller;

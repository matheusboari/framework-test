interface IClientErrorJson {
  message: string;
  data: object | number;
  status: number;
}
export default class ClientError extends Error {
  public data: object | number = null;

  public status = 400;

  constructor(message: string, data: object | number = {}, status = 400) {
    super(message);
    this.data = data;
    this.status = status;
  }

  public toJSON(): IClientErrorJson {
    return {
      message: this.message,
      data: this.data,
      status: this.status
    };
  }
}

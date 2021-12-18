export enum ContentType {
  JSON = 'application/json',
  FormData = 'multipart/form-data',
  FormUrlencoded = 'application/x-www-form-urlencoded'
}

export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete'
}

export type IData = {
  data: object | [];
}

export interface EndpointConfig {
  url: string;
  method?: Method;
  contentType?: ContentType;
  paginated?: boolean;
}

export interface IErrorEvents {
  response: {
    config: object;
    data: object;
    headers: object;
    request: object;
    status: number;
    statusText: string;
  }
}

import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

export interface Request extends ExpressRequest {
  // 在这里添加你需要的自定义属性
}

export interface Response extends ExpressResponse {
  // 在这里添加你需要的自定义属性
}
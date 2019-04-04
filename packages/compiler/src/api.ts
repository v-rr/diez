import {RequestHandler} from 'express';

export type TemplateHandlerFactory = (projectRoot: string) => RequestHandler;

/**
 * A generic interface for a CLI command.
 */
export interface TemplateProvider {
  path: string;
  factory: TemplateHandlerFactory;
}
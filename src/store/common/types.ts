export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
};

export type APIResponse = Record<string, any>;

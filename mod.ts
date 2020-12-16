import { From, PlaneObject } from 'https://raw.githubusercontent.com/aknow2/DEN/main/src/action_interfaces.ts';

export interface Request extends PlaneObject {
  apiToken: string;
  baseUrl: string;
  apiVersion: string;
}

export interface Response extends PlaneObject {
  numOfTodos: number;
  link: string
}

const from: From<Request, Response> = {
  request : {
    apiToken: {
      type: 'string',
      description: 'api token for gitlab'
    },
    baseUrl: {
      type: 'string',
      description: 'gitlab url',
      default: 'https://gitlab.com'
    },
    apiVersion: {
      type: 'string',
      description: 'gitlab rest api version',
      default: 'v4'
    },
  },
  response: {
    numOfTodos: {
      type: 'boolean',
      description: 'result of boolean'
    },
    link: {
      type: 'string',
      description: 'meesage of result'
    }
  },
  async run(param){
    const { baseUrl,  apiToken, apiVersion} = param
    const res = await fetch(`${baseUrl}/api/${apiVersion}/todos`, {
      headers: {
        "PRIVATE-TOKEN": apiToken,
      },
    });
    const result = await res.json()
    console.log(result)
    const numOfTodos =  result.length
    if (numOfTodos > 0) {
      return {
        numOfTodos,
        link: `${baseUrl}/dashboard/todos`
      };
    }
  }
}


export default from


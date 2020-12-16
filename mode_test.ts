import { assertEquals } from "https://deno.land/std@0.77.0/testing/asserts.ts"
import mod, { Response } from './mod.ts'

Deno.test('run module', async () => {
  const result = await mod.run({
    apiToken: '<Set your api token>',
    baseUrl: mod.request.baseUrl.default as string,
    apiVersion: 'v4',
  }) as Response
  console.log(result)
  assertEquals(typeof result.numOfTodos, 'number'); 
})

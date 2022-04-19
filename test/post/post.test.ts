import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import * as postMock from './post.mock';
import sinon from 'sinon';

import { create, getById, gets, remove, update } from '../../src/modules/posts/function/postHandler';
import { Post } from '../../src/modules/posts/model/Post';

describe('lambdaService', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should return data', async () => {
    const mResponse = { code: 200, data: 'mocked data' };
    const mEvent = { id: 1 };
    // const retrieveDataSpy = jest.spyOn(dataService, 'retrieveData').mockResolvedValueOnce(mResponse);
    // const actualValue = await create(mEvent);
    // expect(actualValue).toEqual(mResponse);
    // expect(retrieveDataSpy).toBeCalledWith(mEvent.id);
  });
});
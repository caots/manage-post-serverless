import { listPostHelper } from '../../utils/dbHelper';
import { createPostHelper } from '../mock/post.mock';

createPostHelper.forEach((caseValue) => {
  it(caseValue.title, () => {
    const params = caseValue.data
    const result = listPostHelper(params.docClient, params.tableName, params.title, params.limit, params.keyName, params.nextToken);
    expect(result).toBeDefined()
  });
});
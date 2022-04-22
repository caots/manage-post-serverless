export const getPostById = {
  active: true,
  updatedAt: "2022-04-19T07:12:31.937Z",
  createdAt: "2022-04-19T07:12:31.937Z",
  postId: "f7b7b2bf-cac5-4e09-81a3-b92bae4a5dc5",
  description: "description 1",
  title: "HTML/CSS/JS for newbies"
};

export const getAllPost = [
  {
    active: true,
    updatedAt: "2022-04-19T07:12:31.937Z",
    createdAt: "2022-04-19T07:12:31.937Z",
    postId: "f7b7b2bf-cac5-4e09-81a3-b92bae4a5dc5",
    description: "description 1",
    title: "HTML/CSS/JS for newbies"
  },
  {
    active: true,
    updatedAt: "2022-04-19T07:12:31.937Z",
    createdAt: "2022-04-19T07:12:31.937Z",
    postId: "f7b7b2bf-cac5-4e09-81a3-81a3",
    description: "description 2",
    title: "Nodejs basic"
  }
];

export const createPostBody = [
  {
    title: "",
    data: {
      description: "description 1",
      title: "HTML/CSS/JS for newbies"
    }
  },
  {
    title: "",
    data: {
      description: "description 1",
      title: ""
    }
  }
]

export const createPost = {
  active: true,
  updatedAt: "2022-04-19T07:12:31.937Z",
  createdAt: "2022-04-19T07:12:31.937Z",
  postId: "f7b7b2bf-cac5-4e09-81a3-b92bae4a5dc5",
  description: "description 1",
  title: "HTML/CSS/JS for newbies"
};

export const updatedPost = {
  active: true,
  updatedAt: "2022-04-19T07:12:31.937Z",
  createdAt: "2022-04-19T07:12:31.937Z",
  postId: "f7b7b2bf-cac5-4e09-81a3-b92bae4a5dc5",
  description: "description 1",
  title: "HTML/CSS/JS for newbies"
};

export const ParamsGetAllPostService = [
  {
    title: "get all post service correct params",
    params: {
      title: "aa",
      limit: 1,
      next: "aa"
    }
  },
  {
    title: "get all post service incorrect params",
    params: {
      title: "",
      limit: 1,
      next: ""
    }
  }
]

export const createPostHelper = [
  {
    title: "case 1",
    data: {
      docClient: null,
      tableName: "",
      title: "",
      limit: 0,
      keyName: "",
      nextToken: ""
    }
  },
  {
    title: "case 2",
    data: {
      docClient: null,
      tableName: "tableName",
      title: "abc",
      limit: 0,
      keyName: "",
      nextToken: ""
    }
  },
  {
    title: "case 3",
    data: {
      docClient: null,
      tableName: "tableName",
      title: "abc",
      limit: 0,
      keyName: "abc",
      nextToken: "abc"
    }
  }
]

export const responseGetPostById = {
  active: true,
  updatedAt: '2022-04-21T02:27:12.584Z',
  createdAt: '2022-04-21T02:27:12.584Z',
  postId: 'ea59ee0e-d6e4-4c30-a453-4b909063badd',
  description: 'description 1',
  title: 'Angular for newbies 1'
}
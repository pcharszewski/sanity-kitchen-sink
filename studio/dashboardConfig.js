export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60106b7d0b10d414a0a24867',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4pfiktib',
                  apiId: '3b81a92a-6c25-4fa4-937c-e7c9b9f58d83'
                },
                {
                  buildHookId: '60106b7d64f04a17c5a3b70f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-67ym8d71',
                  apiId: 'ec63aafc-020b-4bfe-8adc-592949789202'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pcharszewski/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-67ym8d71.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

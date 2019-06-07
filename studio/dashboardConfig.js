export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5cfac0f1e0f9f41d2f720ae4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-with-youtube-studio',
                  apiId: '22577eff-9964-4d4f-bb39-def7141b3ea0'
                },
                {
                  buildHookId: '5cfac0f0a2d12a3a0c91410b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-with-youtube',
                  apiId: 'b9fff535-949a-4ebd-8fe2-2819d0c72b68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-gatsby-blog-with-youtube',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-with-youtube.netlify.com', category: 'apps'}
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

export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee231ffa8ae10204a6a9b01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogi-studio',
                  apiId: 'd5064074-e166-4dc1-bd55-b80320f19891'
                },
                {
                  buildHookId: '5ee231ff98f94e1c61ba0be7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogi',
                  apiId: 'd3ac5f62-141c-444e-83e0-914115e7155f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav1/sanity-gatsby-blogi',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

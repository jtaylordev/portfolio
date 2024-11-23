export type PageRoutesType = {
    app: string,
    about: string,
    projects: string,
    contact: string,
    experience: string,
    notebook: string,
    home: string
}

const pageRoutes: PageRoutesType = {
    app: '/',
    about: '/about',
    projects: '/projects',
    contact: '/contact',
    experience: '/experience',
    notebook: '/notebook',
    home: '/home'
}

export { pageRoutes }
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'path', component: FeatureComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

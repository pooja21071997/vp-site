import { Routes } from '@angular/router';
import { Initiatives } from './pages/initiatives/initiatives';
import { Institutes } from './pages/institutes/institutes';
import { Management } from './pages/management/management';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Contactus } from './pages/contactus/contactus';
import { FounderMessage } from './pages/founder-message/founder-message';

export const routes: Routes = [
     { path: '', component: Home },
//    {
//     path: 'about',
//     children: [
//       { path: '', component: About },
//       { path: 'founder-message', component: FounderMessage },
//     ],
//   },
  {path: 'about', component: About },
  {path: 'founder-message', component: FounderMessage },
  { path: 'management', component: Management },
  { path: 'institutes', component: Institutes },
  { path: 'initiatives', component: Initiatives },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contactus },
  { path: '**', redirectTo: '' } // fallback route
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'qaqiDummyApp.product.home.title' },
        loadChildren: () => import('./product/product.routes'),
      },
      {
        path: 'client',
        data: { pageTitle: 'qaqiDummyApp.client.home.title' },
        loadChildren: () => import('./client/client.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

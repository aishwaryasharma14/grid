import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AppModule } from './app.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { products } from './products';

storiesOf('Grid', module)
.addDecorator(
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        GridModule,
      ],
    }),
  )
  .add('Default', () => ({
    template: `<kendo-grid [data]="products" [height]="410">
        <kendo-grid-column field="ProductID" title="ID" width="40">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Name" width="250">
        </kendo-grid-column>
    </kendo-grid>`,
    props: {
        products: products
    }
  }));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserHistoryComponent } from './app/components/user-history.components';

bootstrapApplication(UserHistoryComponent, {
  providers: [
    provideHttpClient()
  ]
});

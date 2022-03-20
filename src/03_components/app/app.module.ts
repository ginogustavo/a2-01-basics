import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './sucess-alert/sucess-alert.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CancelButtonComponent,
    ApplyButtonComponent,
    FooterButtonsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

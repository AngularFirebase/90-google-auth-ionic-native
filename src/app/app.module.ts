import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';

import { InfoPage } from '../pages/info/info';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';

const firebaseConfig = {
  apiKey: 'AIzaSyAc9Tt8pQQF3ntu2Tz66iUKl_fXHtdhIyc',
  authDomain: 'firestarter-96e46.firebaseapp.com',
  databaseURL: 'https://firestarter-96e46.firebaseio.com',
  storageBucket: 'firestarter-96e46-vision',
  messagingSenderId: '581326886241',
  projectId: 'firestarter-96e46'
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,
    TabsPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    LoginPage,
    InfoPage
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

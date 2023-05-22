import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { PlanesComponent } from './planes/planes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Configuración del módulo y el servicio HTTP
import { TiendaComponent} from './tienda/tienda.component';
import { CardsShopComponent } from './tienda/cards-shop/cards-shop.component';
import { CarritoComprasComponent } from './tienda/carrito-compras/carrito-compras.component';
const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'about', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'membresia', component: MembresiaComponent},
  {path: 'navbar', component: NavbarComponent },
  {path: 'tienda', component: TiendaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    MembresiaComponent,
    PlanesComponent,
    SobreNosotrosComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TiendaComponent,
    CardsShopComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

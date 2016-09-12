import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api/index";
import {InMemoryDataService} from "./in-memory-data.service";
import "./rxjs-extensions";
import {HeroSearchComponent} from "./hero-search.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HttpModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
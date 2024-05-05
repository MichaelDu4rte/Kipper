import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ButtonPrimaryComponent, NewsletterFormComponent, FooterComponent]
})
export class HomeComponent {

}

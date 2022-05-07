import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BootstrapCard';
  card_data = [
    {
      title: 'Free',
      price: '0',
      properties: [
        'Single User',
        '5GB Storage',
        'Unlimited Public Projects',
        'Community Access',
      ],
      muted_properties: [
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      title: 'Plus',
      price: '9',
      properties: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
      ],
      muted_properties: ['Monthly Status Reports'],
    },
    {
      title: 'Pro',
      price: '49',
      properties: [
        'Unlimited Users',
        '150GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Unlimited Free Subdomains',
        'Monthly Status Reports',
      ],
      muted_properties:[],
    },
  ];
}

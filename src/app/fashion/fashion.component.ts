import { Component, OnInit } from '@angular/core';
import { productinter } from '../models/product.models';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent  {
  fashion:productinter[]=[
    {
      productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525828223076-L0DJC7EUYXYIMAGWXT86/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/fullyrawkristina-lebanon_41.jpg?format=500w",
      producttitle:"fashion-1",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525828328639-6QHZBZ8VS6J22N6LBB2D/ke17ZwdGBToddI8pDm48kGimpnGS74lOCXEVScmdKfQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdJblJnDTNjTASBy3WMly_ic7RFeFNz6WHDDme815vyzW9AukLhYm2lpbtr2HKmuE68/hawaii-youtube-photographer_066.jpg?format=500w",
        producttitle:"fashion-2",
        productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525830937699-YECU9O33PWE51FPYN6KY/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/photography+sydney_03.jpg?format=500w",
        producttitle:"fashion-3",
        productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525828002930-UP3SIGC7IIRVSPLG4R7K/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/fullyrawkristina-dubai_01.jpg?format=500w",
        producttitle:"fashion-4",
        productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525828066113-OGEYZRICP5HQB0DGNZ3N/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/fullyrawkristina-dubai_36.jpg?format=500w",
        producttitle:"fashion-5",
        productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        productimage:"https://images.squarespace-cdn.com/content/v1/59d6b903f7e0ab75856a1808/1525828150450-TKQXH8E1RPMTTPJ3P8QU/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/fullyrawkristina-lebanon_21.jpg?format=500w",
        producttitle:"fashion-6",
        productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        }
  ]

  
}

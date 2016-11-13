# SmartGrid-Mixins
Smart Grid and breakpoints mixins

```scss

.items {

  @include flex();
  @include justify(center); // justify-content parameters

  .item {
    background-color: #555;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;

    // Without media queries
    @include col(4);  

    // Media queries
    @include col-xl(5);
    @include col-xs(1);

    // xs | sm | md | lg | xl (bootstraped~)
  }
}


```

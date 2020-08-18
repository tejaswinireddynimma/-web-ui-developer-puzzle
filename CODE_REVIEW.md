### Code Review
**book-search.component.html**

issue is with formatDate(b.publishedDate) function binded in template. Function binded in template are costly and they can cause performace issue. The template functions will be called multiple times to render the value. This is because angular cannot determine the value of the functions is changed or not. 

The idle solution would be use date pipe for transforming the date value to the desired output format. Incase if we dont have pipes available then either crate a new pipe or use calculated values by implementing OnChanges(ngOnChanges()) 
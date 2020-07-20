
每个元素的margin box的左边， 与包含border box的左边相接触, 及时存在也是如此
BFC的区域不会与float box重叠

为达到清楚内部浮动， 我们可以触发parent生成BFC， 那么parent在计算高度时, parent内部的浮动元素child也会参与计算
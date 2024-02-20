---
lang: ko-KR 
title: Read 01d
description: COEN020 > Read 01d
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## ARRAYS, OBJECTS, & POINTERS

::: details ARRAYS, OBJECTS, & POINTERS

Consider the following C declaration: 

```c
char a[4];
```

This declares that the identifier `a` represents an object, which is an array. Arrays are simply collections of other objects, and in this example, those objects are chars. Thus the "attribute list" that describes the object `a` is:

> `a` is an array of (4) *\<chars\>*.

The word "array" is underlined to emphasize that the object 'a' is first understood to be an array, even before we worry about the objects it contains. The text in italics and surrounded by angle brackets describes the kind of objects held within the array `a`.

The dimension is enclosed in parentheses since it really doesn't tell us much about the fundamental organization of the data, but only measures its extent. However, the dimension will be important later when we need to determine the "`size`" of `a`.

Applying this to declarations of arrays of two or more dimensions, such as: 

```c
char b[2][4] ;
char c[3][2][4] ;
```

we can write the corresponding attribute lists as:

> `b` is an array of (2) \<arrays of (4) chars\>.
>
> `c` is an array of (3) \<arrays of (2) arrays of (4) chars\>.

First, note that `b` and `c` are both arrays of objects, just like `a` above. The only difference among `a`, `b`, and `c` is the type of objects that these arrays contain: 

> The objects in `a` are *\<chars\>*.
>
> The objects in `b` are *|<arrays of (4) chars\>*.
>
> The objects in `c` are *\<arrays of (2) arrays of (4) chars\>*.

We may employ typedefs to emphasize this "array of objects" concept shared by `a`, `b`, and `c`:

```c
typedef char A_OBJECTS;
typedef char B_OBJECTS[4]; 
typedef char C_OBJECTS[2][4];

A_OBJECTS a[4]; 	// 'a' is an array of (4) <A_OBJECTS>.
B_OBJECTS b[2]; 	// 'b' is an array of (2) <B_OBJECTS>.
C_OBJECTS c[3];		// 'c' is an array of (3) <C_OBJECTS>.
```

Returning to the declaration of `a`, recall that the identifier `a` used without any subscript provides a constant address expression whose value is the base address of the array `a`. In effect, the words "array of" in the attribute list get replaced by the words "pointer to":

> `a` is a __pointer__ to (the 1st of 4) *\<chars\>*.

In a similar manner, we have:

> `b` is a __pointer__ to (the 1st of 2) *\<arrays of (4) chars\>*.
>
> `c` is a __pointer__ to (the 1st of 3) *\<arrays of (2) arrays of (4) chars\>*

This understanding of the identifiers (without full subscripting) is crucial because their appearance in expressions involving pointer arithmetic demands that we understand the size of the objects. Thus,

> '`a+1`' is a __pointer__ to the 2nd *\<char\>*.
>
> '`b+1`' is a __pointer__ to the 2nd *\<array of (4) chars\>*.
>
> '`c+1`' is a __pointer__ to the 2nd *\<array of (2) arrays of (4) chars\>*.

Now it should be clear that the expressions '`a[1]`' and '`*(a+1)`' are equivalent, because both refer to the 2nd char in the array `a`. Internally, C compilers always convert a subscripted array reference into the equivalent pointer expression before compiling it[^01]. We can use this "equivalence" between subscripts and asterisks to determine whether or not a more complicated expression involving an array identifier is "fully subscripted" or not. For example, consider the expression:

```c
*(c[2]+1)+3
```

Is this a char, a pointer to a char, or what?

If we go back to the declaration of `c`, we see that it is an array of three dimensions. Since the above expression contains one subscript and one asterisk, only two of the three dimensions have been taken care of within the expression. Since the expression is not fully subscripted, it yields a pointer, not a char.


In particular, since we know that the first two of three dimensions have been subscripted, then we can conclude that two of the three "array of" phrases within the attribute list of `c` have been "removed". In other words, the object

> `*(c[2]+1)` is an __array__ of (4) *\<chars\>*

When used as an expression, it is treated as a pointer to the 1st of 4 chars. Adding 3 to this then provides a pointer to the 4th char.

Alternately, we could start with the attribute list of the identifier `c`, removing phrases as we add parts of the expression:

> `c` is an __array__ of (3) *\<arrays of (2) arrays of (4) chars\>*. 
>
> '`c[2]`' is (the 3rd) __array__ of (2) *\<arrays of (4) chars\>*.
>
> '`c[2]`' is a __pointer__ to (the 1st of 2) *\<array of (4) chars\>*. 
>
> '`c[2]+1`' is a __pointer__ to (the 2nd of 2) *\<array of (4) chars\>*.
>
> '`*(c[2]+1)`' is (the 2nd) __array__ of (4) *\<chars\>*. 
>
> '`*(c[2]+1)`' is a __pointer__ to (the 1st of 4) *\<chars\>*.
>
> '`*(c[2]+1)+3`' is a __pointer__ to (the 4th of 4) *\<chars\>*.

:::

---

<TagLinks />

[^01]: Since `a[k]` becomes `*(a+k)`, and since addition is commutative, many C compilers also happily accept `k[a]`.
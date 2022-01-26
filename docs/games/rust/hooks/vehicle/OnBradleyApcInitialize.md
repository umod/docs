---
hide_table_of_contents: true
---

# OnBradleyApcInitialize

## Usage

* Called when an APC initializes
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBradleyApcInitialize(BradleyAPC apc)
{
    Puts("OnBradleyApcInitialize works!");
    return null;
}
```

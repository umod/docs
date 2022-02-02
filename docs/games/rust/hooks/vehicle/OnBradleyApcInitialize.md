---
hide_table_of_contents: true
---

# OnBradleyApcInitialize

## Usage

* Called when an APC initializes
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBradleyApcInitialize(BradleyAPC apc)
{
    Puts("OnBradleyApcInitialize works!");
    return null;
}
```

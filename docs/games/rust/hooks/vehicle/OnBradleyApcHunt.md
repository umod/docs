---
hide_table_of_contents: true
---

# OnBradleyApcHunt

## Usage

* Called when an APC starts hunting
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBradleyApcHunt(BradleyAPC apc)
{
    Puts("OnBradleyApcHunt works!");
    return null;
}
```

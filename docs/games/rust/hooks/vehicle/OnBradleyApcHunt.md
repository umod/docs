---
hide_table_of_contents: true
---

# OnBradleyApcHunt

## Usage

* Called when an APC starts hunting
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBradleyApcHunt(BradleyAPC apc)
{
    Puts("OnBradleyApcHunt works!");
    return null;
}
```

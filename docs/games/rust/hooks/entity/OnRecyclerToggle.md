---
hide_table_of_contents: true
---

# OnRecyclerToggle

## Usage

* Called when a recycler is turned on or off
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRecyclerToggle(Recycler recycler, BasePlayer player)
{
    Puts("OnRecyclerToggle works!");
    return null;
}
```

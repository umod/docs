---
hide_table_of_contents: true
---

# OnBookmarkAdd

## Usage

* Called when a player tries to add a bookmark at a computer station
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarkAdd(ComputerStation computerStation, BasePlayer player, string bookmarkName)
{
    Puts("OnBookmarkAdd works!");
    return null;
}
```

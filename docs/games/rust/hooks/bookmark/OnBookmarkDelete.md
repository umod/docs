---
hide_table_of_contents: true
---

# OnBookmarkDelete

## Usage

* Called when a player tries to delete a bookmark at a computer station
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarkDelete(ComputerStation computerStation, BasePlayer player, string bookmarkName)
{
    Puts("OnBookmarkDelete works!");
    return null;
}
```

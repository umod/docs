---
hide_table_of_contents: true
---

# OnBradleyApcInitialize

## Usage

* Called when a player is being sent a list of bookmarks for a computer station
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarksSendControl(ComputerStation computerStation, BasePlayer player, string bookmarks)
{
    Puts("OnBookmarksSendControl works!");
    return null;
}
```

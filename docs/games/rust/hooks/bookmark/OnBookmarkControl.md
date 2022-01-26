---
hide_table_of_contents: true
---

# OnBookmarkControl

## Usage

* Called when a player tries to select a bookmark at a computer station
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarkControl(ComputerStation computerStation, BasePlayer player, string bookmarkName, IRemoteControllable remoteControllable)
{
    Puts("OnBookmarkControl works!");
    return null;
}
```

---
hide_table_of_contents: true
---

# OnBookmarkControl

## Usage

* Called when a player tries to select a bookmark at a computer station
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBookmarkControl(ComputerStation computerStation, BasePlayer player, string bookmarkName, IRemoteControllable remoteControllable)
{
    Puts("OnBookmarkControl works!");
    return null;
}
```

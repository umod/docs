---
hide_table_of_contents: true
---

# OnBookmarkControlStarted

## Usage

* Called after a player has selected a bookmark at a computer station
* No Return behavior

## Examples

```csharp title=""
void OnBookmarkControlStarted(ComputerStation computerStation, BasePlayer player, string bookmarkName, IRemoteControllable remoteControllable)
{
    Puts("OnBookmarkControlStarted works!");
}
```

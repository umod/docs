---
hide_table_of_contents: true
---

# OnBookmarkControlEnded

## Usage

* Called after a player has stopped viewing/controlling an entity at a computer station
* No return behavior

## Examples

```csharp title=""
void OnBookmarkControlEnded(ComputerStation computerStation, BasePlayer player, BaseEntity controlledEntity)
{
    Puts("OnBookmarkControlEnded works!");
}
```

---
hide_table_of_contents: true
---

# OnBookmarkControlEnd

## Usage

* Called when a player tries to stop viewing/controlling an entity at a computer station
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBookmarkControlEnd(ComputerStation computerStation, BasePlayer player, BaseEntity controlledEntity)
{
    Puts("OnBookmarkControlEnd works!");
    return null;
}
```

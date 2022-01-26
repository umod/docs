---
hide_table_of_contents: true
---

# OnHotAirBalloonToggle

## Usage

* Called when a player tries to toggle a hot air balloon on or off
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHotAirBalloonToggle(HotAirBalloon balloon, BasePlayer player)
{
    Puts("OnHotAirBalloonToggle works!");
    return null;
}
```

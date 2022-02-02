---
hide_table_of_contents: true
---

# OnHotAirBalloonToggle

## Usage

* Called when a player tries to toggle a hot air balloon on or off
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHotAirBalloonToggle(HotAirBalloon balloon, BasePlayer player)
{
    Puts("OnHotAirBalloonToggle works!");
    return null;
}
```

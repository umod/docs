---
hide_table_of_contents: true
---

# OnQuarryToggled

## Usage

* Called when a quarry has just been toggled
* No Return behavior

## Examples

```csharp title=""
void OnQuarryToggled(MiningQuarry quarry, BasePlayer player)
{
    Puts($"{player.displayName} has toggled a quarry");
}
```

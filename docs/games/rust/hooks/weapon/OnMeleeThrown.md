---
hide_table_of_contents: true
---

# OnMeleeThrown

## Usage

* Called when the player throws a melee item (axe, rock, ...)
* No Return behavior

## Examples

```csharp title=""
void OnMeleeThrown(BasePlayer player, Item item)
{
    Puts("OnMeleeThrown works!");
}
```

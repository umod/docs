---
hide_table_of_contents: true
---

# OnExplosiveDropped

## Usage

* Called when the player drops an explosive item (C4, grenade, ...)
* No return behavior

## Examples

```csharp title=""
void OnExplosiveDropped(BasePlayer player, BaseEntity entity, ThrownWeapon item)
{
    Puts("OnExplosiveDropped works!");
}
```

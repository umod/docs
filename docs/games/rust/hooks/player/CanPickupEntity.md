---
hide_table_of_contents: true
---

# CanPickupEntity

## Usage

* Called when a player attempts to pickup a deployed entity (AutoTurret, BaseMountable, BearTrap, DecorDeployable, Door, DoorCloser, ReactiveTarget, SamSite, SleepingBag, SpinnerWheel, StorageContainer, etc.)
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanPickupEntity(BasePlayer player, BaseEntity entity)
{
    Puts("CanPickupEntity works!");
    return null;
}
```

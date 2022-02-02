---
hide_table_of_contents: true
---

# OnFishingStopped

## Usage

* Called after fishing has been stopped
* No return behavior

## Examples

```csharp title=""
void OnFishingStopped(BaseFishingRod fishingRod, BaseFishingRod.FailReason reason)
{
    Puts($"OnFishingStopped works!");
}
```

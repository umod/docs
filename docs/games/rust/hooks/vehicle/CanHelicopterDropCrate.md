---
hide_table_of_contents: true
---

# CanHelicopterDropCrate

## Usage

* Called when a CH47 helicopter attempts to drop a crate
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanHelicopterDropCrate(CH47HelicopterAIController heli)
{
    Puts("CanHelicopterDropCrate works!");
    return true;
}
```
